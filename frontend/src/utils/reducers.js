// personal information
export const personalInfoInitialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  linkedin: "",
  github: "",
  website: "",
};

export const personalInfoReducer = (state, action) => {
  switch (action.type) {
    case "firstName":
      return { ...state, [action.type]: action.value };
    case "lastName":
      return { ...state, [action.type]: action.value };
    case "email":
      return { ...state, [action.type]: action.value };
    case "phone":
      return { ...state, [action.type]: action.value };
    case "address":
      return { ...state, [action.type]: action.value };
    case "linkedin":
      return { ...state, [action.type]: action.value };
    case "github":
      return { ...state, [action.type]: action.value };
    case "website":
      return { ...state, [action.type]: action.value };
    default:
      return state;
  }
};


// education initial state
export const educationInitialState = {
  school: "",
  degree: "",
  location: "",
  fieldOfStudy: "",
  month: "",
  year: "",
  grade: "",
};
export const educationReducer = (state, action) => {
  switch (action.type) {
    case "school":
      return { ...state, [action.type]: action.value };
    case "degree":
      return { ...state, [action.type]: action.value };
    case "location":
      return { ...state, [action.type]: action.value };
    case "fieldOfStudy":
      return { ...state, [action.type]: action.value };
    case "month":
      return { ...state, [action.type]: action.value };
    case "year":
      return { ...state, [action.type]: action.value };
    case "grade":
      return { ...state, [action.type]: action.value };

    default:
      return state;
  }
};

// exprerience initial state
export const experienceInitialState = {
  company: "",
  position: "",
  location: "",
  startDate: "",
  endDate: "",
  description: "",
};
export const experienceReducer = (state, action) => {
  switch (action.type) {
    case "company":
      return { ...state, [action.type]: action.value };
    case "position":
      return { ...state, [action.type]: action.value };
    case "location":
      return { ...state, [action.type]: action.value };
    case "startDate":
      return { ...state, [action.type]: action.value };
    case "endDate":
      return { ...state, [action.type]: action.value };
    case "description":
      return { ...state, [action.type]: action.value };

    default:
      return state;
  }
};

// projects initial state
export const projectInitialState = {
  name: "",
  description: "",
  technologies: "",
  link: "",
  github: "",
};
export const projectReducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, [action.type]: action.value };
    case "description":
      return { ...state, [action.type]: action.value };
    case "technologies":
      return { ...state, [action.type]: action.value };
    case "link":
      return { ...state, [action.type]: action.value };
    case "github":
      return { ...state, [action.type]: action.value };

    default:
      return state;
  }
};

// certificatons initial state
export const certificateInitialState = {
  title: "",
  issuer: "",
  date: "",
  link: "",
};
export const certificateReducer = (state, action) => {
  switch (action.type) {
    case "title":
      return { ...state, [action.type]: action.value };
    case "issuer":
      return { ...state, [action.type]: action.value };
    case "date":
      return { ...state, [action.type]: action.value };
    case "link":
      return { ...state, [action.type]: action.value };

    default:
      return state;
  }
};