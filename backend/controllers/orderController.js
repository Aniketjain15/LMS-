import Razorpay from "razorpay";
import Course from "../models/courseModel.js";
import User from "../models/userModel.js";
import crypto from "crypto";

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET, // ✅ FIXED
});

export const createOrder = async (req, res) => {
  try {
    const { courseId } = req.body;

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    const options = {
      amount: course.price * 100,
      currency: "INR",
      receipt: `receipt_${courseId}`, // ✅ FIXED
    };

    const order = await razorpayInstance.orders.create(options);
    return res.status(200).json(order);

  } catch (error) {
    console.error("Create Order Error:", error);
    return res.status(500).json({ message: "Order creation failed" });
  }
};





export const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      courseId,
      userId
    } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({ message: "Payment verification failed" });
    }

    // Enroll user
    await User.findByIdAndUpdate(userId, {
      $addToSet: { enrolledCourses: courseId }
    });

    await Course.findByIdAndUpdate(courseId, {
      $addToSet: { enrolledStudents: userId }
    });

    return res.status(200).json({ message: "Payment verified & enrolled" });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Payment verification error" });
  }
};
