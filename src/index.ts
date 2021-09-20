import { User } from "./models/User";

const user = new User({ id: 1, name: `Dracula`, age: 998 });

// console.log(user.get("name"));

user.on("save", () => {
  console.log(user);
});

// user.trigger("change");

// user.set({ name: "New name" });

// user.fetch();

user.save();
