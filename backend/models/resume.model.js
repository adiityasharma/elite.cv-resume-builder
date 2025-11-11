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
    summary: { type: String },
    profileImage: { type: String }, // optional: base64 or URL
  },

  education: [
    {
      school: { type: String, required: true },
      degree: { type: String, required: true },
      fieldOfStudy: { type: String },
      startDate: { type: Date },
      endDate: { type: Date },
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
      isCurrent: { type: Boolean, default: false },
      achievements: [{ type: String }],
    },
  ],

  projects: [
    {
      name: { type: String, required: true },
      description: { type: String },
      technologies: [{ type: String }],
      link: { type: String },
      github: { type: String },
    },
  ],

  skills: [
    {
      name: { type: String, required: true },
      level: {
        type: String,
        enum: ["beginner", "intermediate", "advanced", "expert"],
        default: "beginner",
      },
    },
  ],

  certifications: [
    {
      title: { type: String, required: true },
      issuer: { type: String },
      date: { type: Date },
      credentialId: { type: String },
      link: { type: String },
    },
  ],

  languages: [
    {
      name: { type: String, required: true },
      proficiency: {
        type: String,
        enum: ["basic", "conversational", "fluent", "native"],
        default: "basic",
      },
    },
  ],

  interests: [{ type: String }],

  customSections: [
    {
      title: { type: String },
      content: { type: String }, // raw HTML or text
    },
  ],

  design: {
    color: { type: String, default: "#000000" },
    font: { type: String, default: "Arial" },
    layout: { type: String, enum: ["one-column", "two-column"], default: "one-column" },
  },

  settings: {
    visibility: {
      type: String,
      enum: ["private", "public"],
      default: "private",
    },
    lastEdited: { type: Date, default: Date.now },
    downloadable: { type: Boolean, default: true },
  },
},
  {
    timestamps: true,
  }
);

export const Resume = mongoose.model("Resume", resumeSchema);

