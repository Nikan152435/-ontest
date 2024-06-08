// Ваш существующий код для типов

export interface CommentModelDataResult {
    total?: number;
    data?: CommentModel[];
  }
  
  export interface CommentModel {
    id: string;
    createDT?: string;
    updateDT?: string;
    user?: UserModel;
    userGuid?: string;
    text?: string | null;
    isLike?: boolean | null;
  }
  
  export interface UserModel {
    username: string;
  }