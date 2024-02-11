import * as yup from "yup";

const userNamePattern =
  /^09[\d]{9}$|^[\w]{5,15}@(gmail|yahoo|Outlook|Zoho Mail|ProtonMail).com$/;

export const loginValidation = yup.object().shape({
  logInUserName: yup
    .string()
    .matches(userNamePattern, {
      message: "شماره تلفن یا ایمیل  خود را درست وارد کنید",
    })
    .required("وارد کردن شماره تلفن یا ایمیل اجباریست"),
  logInPassword: yup
    .string()
    .required("پسوورد را وارد کنید*")
    .min(8, "باید حداقل شامل 8 کاراکتر باشد*")
    .max(30, "باید حداکثر شامل 30 کاراکتر باشد*")
    .matches(/[\w]/, "باید شامل حداقل یک حرف باشد*")
    .matches(/[#$%&@_]/, "باید شامل حداقل یکی از # $ % & @ باشد*"),
});

export const registerS1Validation = yup.object().shape({
  loginPhoneNumber: yup
    .string()
    .matches(/^09[\d]{9}$/, "شماره تلفن خود را درست وارد کنید")
    .required("وارد کردن شماره تلفن اجباریست"),
});

const verifyCode = /^[0-9]{4,5}$/;

export const registerS2Validation = yup.object().shape({
  verifyCode: yup
    .string()
    .matches(verifyCode, "کد تایید وارد شده مجاز نیست")
    .required("پر کردن فیلد مربوط به کد تایید اجباریست"),
});

const emailValidation =
  /^[\w]{5,15}@(gmail|yahoo|Outlook|Zoho Mail|ProtonMail).com$/;

export const registerS3Validation = yup.object().shape({
  registerUserName: yup
    .string()
    .matches(emailValidation, "ایمیل وارد شده معتبر نیست")
    .required("این فیلد اجباریست"),
  registerPassword: yup
    .string()
    .required("پسوورد را وارد کنید*")
    .min(8, "باید حداقل شامل 8 کاراکتر باشد*")
    .max(30, "باید حداکثر شامل 30 کاراکتر باشد*")
    .matches(/[\w]/, "باید شامل حداقل یک حرف باشد*")
    .matches(/[#$%&@_]/, "باید شامل حداقل یکی از # $ % _ & @ باشد*"),
  registerPasswordRepeat: yup
    .string()
    .oneOf([yup.ref("registerPassword"), null], "لطفا رمز  را درست تکرار کنید")
    .required("این فیلد اجباریست"),
});
export const editProfileValidation = yup.object().shape({
  FName: yup.string().required("این فیلد اجباریست"),
  LName: yup.string().required("این فیلد اجباریست"),
  NationalCode: yup
    .string()
    .matches(/^[\d]+$/, "لطفا فقط از عدد استفاده کنید")
    .matches(/^[\d]{10}$/, "شماره ملی باید 10 رقمی باشد")
    .required("این فیلد اجباریست"),
  HomeAdderess: yup.string().required("این فیلد اجباریست"),
  UserAbout: yup.string().required("این فیلد اجباریست"),
  // BirthDay: yup.string().required("این فیلد اجباریست"),
});
export const commentValidation = yup.object().shape({
  title: yup
    .string()
    .matches(/^[\w\u0600-\u06FF\s]{5,}$/, "عنوان حداقل باید 5 حرف باشد")
    .required("این فیلد اجباریست"),
  describe: yup
    .string()
    .matches(/^[\w\u0600-\u06FF\s ]{5,}$/, "کامنت حداقل باید 5 حرف باشد")
    .required("این فیلد اجباریست"),
});

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const email = yup.string().required("ایمیل خود را وارد کنید*");
const password = yup
  .string()
  .required("پسوورد را وارد کنید*")
  .min(8, "باید حداقل شامل 8 کاراکتر باشد*")
  .max(30, "باید حداکثر شامل 30 کاراکتر باشد*")
  .matches(/[0-9]/, "باید شامل عدد باشد*")
  .matches(/[a-z]/, "باید شامل حداقل یک حرف کوچک باشد*")
  .matches(/[A-Z]/, "باید شامل حداقل یک حرف بزرگ باشد*")
  .matches(/[#$%&@]/, "باید شامل حداقل یکی از # $ % & @ باشد*");

const profile = yup.mixed().required("لطفا عکس خود را انتخاب کنید");

const fullName = yup
  .string()
  .required("نام و نام خانوادگی  خود را وارد کنید*")
  .matches(/^[\u0600-\u06FF\s]+$/, "باید شامل حروف فارسی باشد*");

const message = yup.string().required("پیام خود را وارد کنید*");

const phoneNumber = yup
  .string()
  .required("شماره تماس خود را وارد کنید")
  .min(11, "باید حداقل شامل 11 کاراکتر باشد*")
  .max(11, "باید حداکثر شامل 11 کاراکتر باشد*")
  .matches(/[0-9]/, "باید شامل عدد باشد*");

const nationalId = yup
  .string()
  .required("کد ملی را وارد کنید")
  .min(10, "باید حداقل شامل 10 کاراکتر باشد*")
  .max(10, "باید حداکثر شامل 10 کاراکتر باشد*")
  .matches(/[0-9]/, "باید شامل عدد باشد*");

const birthDate = yup.string().required("تاریخ تولد خود را وارد کنید");
// .min(8, "باید حداقل شامل 8 کاراکتر باشد*")
// .max(8, "باید حداکثر شامل 8 کاراکتر باشد*")
// .matches(/[0-9]/, "باید شامل عدد باشد*");

const confirmPwd = yup.string().required("پسوورد را دوباره وارد کنید*");
// .oneOf([Yup.ref("password")], "پسوورد همخوانی ندارد*");

const address = yup.string().optional();

const role = yup.string().required("نقش خود را انتخاب کنید");
const string = yup.string().required("اطلاعات مربوطه را وارد کنید");
const number = yup
  .string()
  .required("اطلاعات مربوطه را وارد کنید")
  .matches(/[0-9]/, "باید شامل عدد باشد*");
