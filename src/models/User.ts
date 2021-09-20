import { APISync } from "./APISync";
import { Eventing } from "./Eventing";
import { Attributes } from "./Attributes";
import { Model } from "./Model";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const url = `http://localhost:3000/users`;

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new APISync<UserProps>(url)
    );
  }
}
