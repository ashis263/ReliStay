"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const ContactForm = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const emailParams = { name, email, message };
    if (
      !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ) {
      throw new Error("Missing EmailJS environment variables");
    }
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        emailParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast("Message Sent!", {
            position: "top-center",
            duration: 2000,
          });
      });
      
      const form = document.querySelector('form');
      if(form){
        form.reset();
      }
  };
  return (
    <form id="contactForm" onSubmit={handleSubmit}>
      <div className="grid gap-6">
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter Your Name"
              name="name"
              className="bg-white"
              required
            />
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter Your Email"
                name="email"
                className="bg-white"
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email">Your Message</Label>
              <Textarea
                id="email"
                placeholder="Write Your Message Here"
                name="message"
                className="bg-white"
                required
              />
            </div>
          </div>
          <div className="grid gap-6">
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
