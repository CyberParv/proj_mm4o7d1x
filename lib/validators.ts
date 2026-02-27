import { z } from "zod";

export const contactSubmissionSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(7).max(20).optional(),
  message: z.string().min(10).max(2000),
  interestedIn: z.string().min(2).max(100).optional(),
  source: z.string().min(2).max(100).optional(),
});

export type ContactSubmissionInput = z.infer<typeof contactSubmissionSchema>;
