import mongoose from "mongoose";

// 1st step: You need to create a schema
// 2nd Step : You would create a model based off of that schema

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
