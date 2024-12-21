import { z, ZodSchema } from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(100, { message: "Name must be less than 100 characters." }),
  company: z.string(),
  featured: z.coerce.boolean(),
  price: z.coerce.number().int().min(0, {
    message: "Price must be a positive number.",
  }),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(" ").length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    {
      message: "Description must be between 10 and 1000 words.",
    }
  ),
});

export const imageSchema = z.object({
  image: validateImageFile(),
});

function validateImageFile() {
  const maxUploadSize = 1 * 1024 * 1024;
  const acceptedFileTypes = ["image/png", "image/jpeg", "image/webp"];

  return z
    .instanceof(File)
    .refine((file) => file.size <= maxUploadSize, {
      message: "Image file size must be less than 1 MB.",
    })
    .refine((file) => acceptedFileTypes.includes(file.type), {
      message: "File must be a PNG, JPEG, or WebP image.",
    });
}

export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(", "));
  }
  return result.data;
}
