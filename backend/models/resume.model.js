import mongoose, { Schema } from "mongoose";

const resumeSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  title: {
    type: String,
    required: true,
    default: "Untitled Resume",
  },
  summary: {
    type: String
  },

  template: {
    type: String,
    enum: ["classic", "modern", "minimal", "creative"],
    default: "classic",
  },

  personalInfo: {
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true },
    phone: { type: String },
    address: { type: String },
    linkedin: { type: String },
    github: { type: String },
    website: { type: String },
    profileImage: { type: String }, // optional: base64 or URL
  },

  education: [
    {
      id: String,
      school: { type: String, required: true },
      degree: { type: String, required: true },
      location: { type: String },
      fieldOfStudy: { type: String },
      month: { type: String },
      year: { type: String },
      grade: { type: String },
      description: { type: String },
    },
  ],

  experience: [
    {
      company: { type: String, required: true },
      position: { type: String, required: true },
      location: { type: String },
      startDate: { type: Date },
      endDate: { type: Date },
      description: [{ type: String }],
    },
  ],

  projects: [
    {
      name: { type: String, required: true },
      description: { type: String },
      technologies: { type: String },
      link: { type: String },
      github: { type: String },
    },
  ],

  skills: [
    {
      id: { type: String },
      name: { type: String, required: true },
    },
  ],

  certificates: [
    {
      title: { type: String, required: true },
      issuer: { type: String },
      date: { type: Date },
      link: { type: String },
    },
  ],

  languages: [
    {
      name: { type: String, required: true },
      proficiency: {
        type: String,
        enum: ["Beginner", "Elementary", "Intermediate", "Upper-Intermediate", "Advanced"],
        default: "Advanced",
      },
    },
  ],

  interests: [{ type: String }],

  customSections: [
    {
      title: { type: String },
      content: { type: String },
    },
  ],

  design: {
    color: { type: String, default: "#000000" },
    font: { type: String, default: "'Roboto Variable', sans-serif" },
    fontWeight: { type: String, default: "400" },
    fontSize: { type: String, default: "medium" },
    template: { type: String, default: "TP1" },
  },

},
  {
    timestamps: true,
  }
);

export const Resume = mongoose.model("Resume", resumeSchema);

