import mongoose from "mongoose";

// change to .env
mongoose.connect(
  `mongodb+srv://admin:admin@cluster0.hxvcj.mongodb.net/test?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
