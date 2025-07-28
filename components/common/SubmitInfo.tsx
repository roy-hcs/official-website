'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { submitInfo } from '@/lib/api';
// Define form schema with Zod
const formSchema = z.object({
  firstName: z.string().min(1, { message: 'FirstName is required' }),
  lastName: z.string().min(1, { message: 'LastName is required' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email format' }),
  phone: z.string().min(1, { message: 'Phone is required' }),
  productInterest: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface SubmitInfoProps {
  onSuccess?: () => void;
}

export default function SubmitInfo({ onSuccess }: SubmitInfoProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      productInterest: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      // Using our submitInfo API function
      await submitInfo({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        productInterest: data.productInterest || '',
      });

      alert(['Submit successful', 'We will contact you soon'].join('\n'));
      if (onSuccess) onSuccess();
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(
        error instanceof Error
          ? error.message
          : 'Failed to submit. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white lg:w-[848px] lg:h-[auto] lg:p-[80px] lg:overflow-y-hidden w-full p-6 h-[80vh] overflow-y-scroll">
      <div>
        <div className="mb-6">
          <span className="font-semibold lg:text-[36px] lg:leading-[1.2] text-[#020f2c] text-3xl  w-full leading-normal">
            Your Success Starts Here &ndash; Let&apos;s Connect!
          </span>
          <div className="inline-block ml-6 w-9 h-9 bg-[url('/assets/icon.png')] bg-center bg-[length:100%] bg-no-repeat"></div>
        </div>
        <div>
          <span className="font-normal text-sm lg:leading-[1.6] text-[#656b8a]  w-full leading-normal">
            Ready to elevate your trading game? Fill out the form, and our team
            will get in touch with solutions tailored to your needs.
          </span>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="lg:my-12 my-3">
            <div className="lg:flex gap-10 lg:mb-12 block mb-6">
              <div className="flex-1 lg:mb-12 mb-6">
                <div className="relative">
                  <input
                    {...register('firstName')}
                    placeholder="First Name"
                    className="w-full h-12 px-3 border border-gray-300 rounded focus:outline-none"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1 absolute">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex-1 lg:mb-12 mb-6">
                <div className="relative">
                  <input
                    {...register('lastName')}
                    placeholder="Last Name"
                    className="w-full h-12 px-3 border border-gray-300 rounded focus:outline-none"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1 absolute">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="lg:flex gap-10 mb-12 block max-lg:mb-0">
              <div className="flex-1 lg:mb-12 mb-6">
                <div className="relative">
                  <input
                    {...register('phone')}
                    placeholder="Phone Number"
                    className="w-full h-12 px-3 border border-gray-300 rounded focus:outline-none"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1 absolute">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex-1 lg:mb-12 mb-6">
                <div className="relative">
                  <input
                    {...register('email')}
                    placeholder="E-Mail"
                    className="w-full h-12 px-3 border border-gray-300 rounded focus:outline-none"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1 absolute">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="lg:mb-12 mb-6">
              <div className="relative">
                <textarea
                  {...register('productInterest')}
                  placeholder="Specify which product and services you are interested in"
                  className="w-full h-[96px] px-3 py-2 border border-gray-300 rounded focus:outline-none resize-none"
                />
                {errors.productInterest && (
                  <p className="text-red-500 text-xs mt-1 absolute">
                    {errors.productInterest.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-[162px] h-[52px] rounded-[8px] bg-[#020f2c] flex items-center justify-center cursor-pointer disabled:opacity-70"
          >
            <span className="font-semibold text-base text-white leading-none">
              Send message
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
