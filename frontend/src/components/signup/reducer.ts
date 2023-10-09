import { z } from 'zod';

export const signUpSchema = z.object({
  studentId: z.string().regex(/^\d{8}21$/, { message: 'รหัสนิสิตไม่ถูกนิ' }),
  nickname: z.string(),
  firstName: z.string(),
  lastName: z.string(),
});

export type SignUpState = z.infer<typeof signUpSchema>;

export type SignUpFlattenError = z.inferFlattenedErrors<typeof signUpSchema>;

export const INITIAL_STATE: SignUpState = {
  firstName: '',
  lastName: '',
  nickname: '',
  studentId: '',
};

type ActionType = 'CHANGE_INPUT';

export const signUpReducer = (
  state: SignUpState,
  action: { type: ActionType; payload: { name: string; value: string } }
) => {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
};
