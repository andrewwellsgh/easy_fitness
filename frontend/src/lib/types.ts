import { z } from 'zod';

export const ExerciseSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  weight: z.number().positive(),
});

export type Exercise = z.infer<typeof ExerciseSchema>;