import { AbstractDocument } from 'src/common/database/abstract.schema';
export declare class UserDocument extends AbstractDocument {
    email: string;
    password: string;
}
export declare const UserSchema: import("mongoose").Schema<UserDocument, import("mongoose").Model<UserDocument, any, any, any, import("mongoose").Document<unknown, any, UserDocument> & UserDocument & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UserDocument, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<UserDocument>> & import("mongoose").FlatRecord<UserDocument> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v?: number;
}>;
