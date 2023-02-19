import React from 'react';
import {Image, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import GS from '../../Styles/GlobalStyle';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import FW5 from 'react-native-vector-icons/FontAwesome5';
import Home from '../../Screens/mainScreens/Home';
import Styles from '../../Styles';
import {
  Colors,
  ThemeDarkBlue,
  ThemeDarkGreen,
  ThemeDarkOrange,
  ThemeLightBlue,
  ThemeLightGreen,
  ThemeLightOrange,
  ThemeThinBlue,
  ThemeThinGreen,
  ThemeThinOrange,
} from '../../config/Colors';
import {normalizeSize} from '../../utility';
import Account from '../../Screens/mainScreens/Account';
import LocationHeader from '../../Components/LocationHeader';
import AccountHeader from '../../Components/AccountHeader';
import {AppTheme} from '../../config/Constants';
import Booking from '../../Screens/mainScreens/Booking';
import BookingHeader from '../../Components/BookingHeader';
import Notification from '../../Screens/mainScreens/Notification';
import DefaultHeader from '../../Components/DefaultHeader';

export const landingPageBannersOption = [
  {
    title: 'Earn Points',
    image: require('../../assets/images/welcome_image1.png'),
    text: 'Enjoy discounts on your next order when you refer your friends to fako.',
  },
  {
    title: 'Schedule Delivery For Future',
    image: require('../../assets/images/welcome_image2.png'),
    text: 'Send a package at a convenient tim, Schedule a future time and day to have your packages picked up and delivered.',
  },
  {
    title: 'Multiple Deliveries',
    image: require('../../assets/images/welcome_image3.png'),
    text: 'Have items delivered to multiple customers at various locations with one order.',
  },
];

export const SocialLoginList = [
  {
    title: 'WelcomeScreen_Continue_with_Google',
    type: 'google',
    icon: require('../../assets/icons/google_icon.png'),
    style: {width: 15, height: 15, resizeMode: 'contain'},
    // path: "Signup"
  },
  {
    title: 'WelcomeScreen_Continue_with_Facebook',
    icon: require('../../assets/icons/fb_icon.png'),
    type: 'facebook',
    style: {width: 20, height: 20, resizeMode: 'contain'},

    // path: "Login"
  },
];

// export const SocialLoginList = [
//     {
//         Icon: (style = {}) => <Image source={require("../../assets/icons/googleIcon.png")} style={[GS.icon, style]} />,
//         text: "Google"
//     },
//     {
//         Icon: (style = {}) => <Image source={require("../../assets/icons/fb.png")} style={[GS.icon, style]} />,
//         text: "Facebook"
//     },
// ]

export const LoginFormList = [
  {
    placeholder: 'Email Address',
    secureTextEntry: false,
    name: 'email',
  },
  {
    placeholder: 'Password',
    secureTextEntry: true,
    name: 'password',
  },
];

export const SignupTopFormList = [
  {
    split: [
      {
        placeholder: 'First Name',
        secureTextEntry: false,
        name: 'firstname',
        type: 'default',
      },
      {
        placeholder: 'Last Name',
        secureTextEntry: false,
        name: 'lastname',
        type: 'default',
      },
    ],
  },
  {
    split: [
      {
        placeholder: 'Code',
        secureTextEntry: false,
        name: 'phonecode',
        type: 'number-pad',
        style: {flex: 0.34, flexDirection: 'row', alignItem: 'center'},
        inputStyle: {paddingLeft: '30%'},
      },
      {
        placeholder: 'Phone Number',
        secureTextEntry: false,
        name: 'phonenumber',
        type: 'number-pad',
        style: {flex: 0.6},
      },
    ],
  },
  {
    placeholder: 'Email Address',
    secureTextEntry: false,
    name: 'email',
    type: 'email-address',
  },
];

export const SignupBottomFormList = [
  {
    placeholder: 'Password',
    secureTextEntry: true,
    name: 'password',
    type: 'password',
  },
  {
    placeholder: 'Referal Code',
    secureTextEntry: false,
    name: 'referalcode',
    type: 'number-pad',
  },
];

export const BottomNavOptions = [
  {
    path: 'Home',
    component: Home,
    Icon: ({color}) => (
      <MCI
        name="home"
        size={normalizeSize(23)}
        color={color}
        style={{backgroundColor: 'transparent'}}
      />
    ),
    Text: ({color}) => (
      <Text style={[Styles.normalText, {color: color}]}>Home</Text>
    ),
    Header: () => <LocationHeader />,
  },
  {
    path: 'Booking',
    component: Booking,
    Icon: ({color}) => (
      <MCI name="file-document" size={normalizeSize(20)} color={color} />
    ),
    Text: ({color}) => (
      <Text style={[Styles.normalText, {color: color}]}>Booking</Text>
    ),
    Header: () => <BookingHeader />,
  },
  {
    path: 'Notification',
    component: Notification,
    Icon: ({color}) => (
      <FW5 name="bell" size={normalizeSize(19)} color={color} solid />
    ),
    Text: ({color}) => (
      <Text style={[Styles.normalText, {color: color}]}>Notification</Text>
    ),
    Header: () => <DefaultHeader icon={require("../../assets/icons/notification1.png")} title={'Notification'} />,
  },
  {
    path: 'Account',
    component: Account,
    Icon: ({color}) => (
      <FW5 name="user" size={normalizeSize(20)} color={color} solid />
    ),
    Text: ({color}) => (
      <Text style={[Styles.normalText, {color: color}]}>Account</Text>
    ),
    Header: () => <AccountHeader />,
  },
];

export const ServiceOption = [
  {
    icon: require('../../assets/images/box1.png'),
    title: 'Delivery',
    outerBackground: ThemeLightGreen,
    background: ThemeThinGreen,
    dark: ThemeDarkGreen,
    style: {
      height: normalizeSize(35),
      width: normalizeSize(35),
      resizeMode: 'contain',
    },
    path: 'BookingForm',
  },
  {
    icon: require('../../assets/images/foodie.png'),
    title: 'Foodie',
    outerBackground: ThemeLightOrange,
    dark: ThemeDarkOrange,

    background: ThemeThinOrange,
    style: {
      height: normalizeSize(35),
      width: normalizeSize(35),
      resizeMode: 'contain',
    },

    path: 'FoodieBooking',
  },
  {
    icon: require('../../assets/images/shopa.png'),
    title: 'Shopa',
    outerBackground: ThemeLightBlue,
    dark: ThemeDarkBlue,

    background: ThemeThinBlue,
    style: {
      height: normalizeSize(35),
      width: normalizeSize(35),
      resizeMode: 'contain',
    },

    path: 'FoodieBooking',
  },
];

export const AccountMenuList = [
  // {
  //     Icon: () => <Image source={require("../../assets/icons/user1.png")} style={{ width: normalizeSize(30), height: normalizeSize(30), resizeMode: "contain" }} />,
  //     title: "Profile",
  //     path: "Profile"
  // },
  {
    // Icon: () => <Image source={require("../../assets/icons/location-pin1.png")} style={{ width: normalizeSize(30), height: normalizeSize(30), resizeMode: "contain" }} />,
    icon: require('../../assets/icons/location-pin1.png'),
    title: 'Manage Address',
    path: 'ManageAddresses',
  },
  {
    icon: require('../../assets/icons/privacy_policy.png'),
    // Icon: () => <Image source={require("../../assets/icons/privacy_policy.png")} style={{ width: normalizeSize(30), height: normalizeSize(30), resizeMode: "contain" }} />,
    title: 'Privacy Policy',
    path: 'PrivacyPolicy',
  },
  {
    icon: require('../../assets/icons/headphone2.png'),

    // Icon: () => <Image source={require("../../assets/icons/headphone2.png")} style={{ width: normalizeSize(30), height: normalizeSize(30), resizeMode: "contain" }} />,
    title: 'Support',
    path: 'Support',
  },
  {
    icon: require('../../assets/icons/multiple_person.png'),

    // Icon: () => <Image source={require("../../assets/icons/multiple_person.png")} style={{ width: normalizeSize(30), height: normalizeSize(30), resizeMode: "contain" }} />,
    title: 'Invite Referrals',
    path: 'ReferalScreen',
  },
  // {
  //   icon: require('../../assets/icons/payment_card.png'),
  //   // Icon: () => <Image source={require("../../assets/icons/payment_card.png")} style={{ width: normalizeSize(30), height: normalizeSize(30), resizeMode: "contain" }} />,
  //   title: 'Available Payment',
  //   path: 'AvailablePayments',
  // },
];

export const ProfileEditFormTopList = [
  {
    placeholder: 'First Name',
    secureTextEntry: false,
    name: 'firstname',
    type: 'default',
  },
  {
    placeholder: 'Last Name',
    secureTextEntry: false,
    name: 'lastname',
    type: 'default',
  },

  {
    split: [
      {
        placeholder: 'Code',
        secureTextEntry: false,
        name: 'phonecode',
        type: 'number-pad',
        style: {flex: 0.34},
      },
      {
        placeholder: 'Phone Number',
        secureTextEntry: false,
        name: 'phonenumber',
        type: 'number-pad',
        style: {flex: 0.6},
      },
    ],
  },
  {
    placeholder: 'Email Address',
    secureTextEntry: false,
    name: 'email',
    type: 'email-address',
  },
];

export const DiscountsBanners = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    // illustration: require("../../assets/image/sample1.png"),
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    // illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
    // illustration: require("../../assets/images/sample1.png"),
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    // illustration: 'https://i.imgur.com/MABUbpDl.jpg',
    // illustration: require("../../assets/images/sample1.png"),
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    // illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
    // illustration: require("../../assets/images/sample1.png"),
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    // illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
    // illustration: require("../../assets/images/sample1.png"),
  },
];

export const ProfileEditFormBottomList = [
  {
    placeholder: 'Country',
    secureTextEntry: false,
    name: 'country',
    type: 'default',
  },
  {
    placeholder: 'City',
    secureTextEntry: false,
    name: 'city',
    type: 'default',
  },
];

export const AddAddressForm = [
  {
    placeholder: 'Flat Number',
    secureTextEntry: false,
    name: 'flat_number',
  },

  {
    placeholder: 'Save As',
    secureTextEntry: false,
    name: 'save_as',
  },
];

export const DeliveryDetailsFormList = [
  {
    placeholder: 'DeliveryDetailsForm_Pick_Up_Mobile_Number',
    secureTextEntry: false,
    name: 'picker_number',
    icon: require('../../assets/icons/call.png'),
    keyboardType: 'number-pad',
    maxLength: 10,
  },
  {
    placeholder: 'DeliveryDetailsForm_Receiver_Name',
    secureTextEntry: false,
    name: 'receiver_name',
    icon: require('../../assets/icons/person_card.png'),
    keyboardType: 'default',
  },
  {
    placeholder: 'DeliveryDetailsForm_Receiver_Mobile_Number',
    secureTextEntry: false,
    name: 'receiver_number',
    icon: require('../../assets/icons/call.png'),
    keyboardType: 'number-pad',
    maxLength: 10,
  },
  {
    placeholder: 'DeliveryDetailsForm_Delivery_Instructions',
    secureTextEntry: false,
    name: 'instructions',
    icon: require('../../assets/icons/book_opened.png'),
    keyboardType: 'default',
  },
  // {
  //     placeholder:"Package Type",
  //     secureTextEntry:false,
  //     dropDown:true,
  //     name:"package_type"

  // },
];

export const TotatFare = [
  {
    type: 'DeliveryPricingEstimationScreen_Estimated_Fare',
    // price: "$8.00"
    name: 'estimated_fare',
    currency: true,
  },
  // {
  //   type: 'DeliveryPricingEstimationScreen_Service_Fare',
  //   // price: "$8.00"
  //   name: 'service_charge',
  //   currency: true,
  // },
  
  {
    type: 'DeliveryPricingEstimationScreen_Distance_In_Kms',
    name: 'distance',
  },
  // {
  //     type: "Apply Referral",
  //     btn: "Apply",
  // },
];
export const FinalTotatFare = [
  {
    type: 'Distance (In Kms):',
    key: 'distance2',
  },
  {
    type: 'Base Fare',
    key: 'fixed',
  },
  {
    type: 'Direction Fare',
    key: 'distance',
  },
  {
    type: 'Service Charges',
    key: 'tips',
  },
];

export const PaymentOptionList = [
  {
    type: 'Cash',
    img: require('../../assets/icons/cash1.png'),
  },
  {
    type: 'Card',
    img: require('../../assets/icons/card1.png'),
  },
  {
    type: 'Momo',
    img: require('../../assets/icons/momo_payment_icon.png'),
  },
];

export const ResetPasswordFor = [
  {
    placeholder: 'Old Password',
    secureTextEntry: true,
    name: 'old_password',
    type: 'password',
  },
  {
    placeholder: 'New Password',
    secureTextEntry: true,
    name: 'new_password',
    type: 'password',
  },
  {
    placeholder: 'Confirm Password',
    secureTextEntry: true,
    name: 'confirm_password',
    type: 'password',
  },
];

export const ShareAndEarnSteps = [
  'Share your referal code with friends and ask them to enter the code in the referal field when signing up to earn points.',
  'Ask your friend to use the referral code within 10 days to take advantage of the discount.',
];

export const ShareReferal=[
  'Share the code below or ask to enter it after they sign up.Your coupon will appear after their first ride.',
  'For your friend to receive their coupon, ensure that they use your referral before their first ride and within 10 days of signup.',
];


export const ResetPasswordFormAuth = [
  {
    placeholder: 'OTP',
    // secureTextEntry:true,
    name: 'old_password',
    type: 'number-pad',
  },
  {
    placeholder: 'New Password',
    secureTextEntry: true,
    name: 'new_password',
    type: 'password',
  },
  {
    placeholder: 'Confirm Password',
    secureTextEntry: true,
    name: 'confirm_password',
    type: 'password',
  },
];

export const CarTotalList = [
  {
    title: 'Item Total',
    price: '1.96',
  },
  {
    title: 'Delivery Charge',
    price: '16.0',
  },
  {
    title: 'Shop GST',
    price: '0.06',
  },
  {
    title: 'Service Charge',
    price: '1.04',
  },
  {
    title: 'Shop Package Charge',
    price: '1.0',
  },
];

export const MomoAddFormList = [
  {
    label: "Account holder's Name",
    placeholder: "Account holder's Name",
    name: 'Account_holder_name',
    type: 'default',
    icon: require('../../assets/icons/person_card.png'),
  },

  {
    label: 'Phone Number',
    placeholder: 'Phone Number',
    name: 'phone_number',
    type: 'phone-pad',
    icon: require('../../assets/icons/call.png'),
  },
  {
    label: 'Email Address',
    placeholder: 'Email Address',
    name: 'email_address',
    type: 'email-address',
    icon: require('../../assets/icons/email2.png'),
  },
];

export const deliveryOptionList = [
  {
    name: 'Bike',
    image: require('../../assets/icons/bike1.png'),
  },
  {
    name: 'Car',
    image: require('../../assets/icons/truck1.png'),
  },
];

export const ContactOptionToDriver = [
  {
    label:"DeliveryWithDriverScreen_CALL_RIDER",
    icon: require('../../assets/icons/call.png'),
    path: 'call',
  },
  {
    label:"DeliveryWithDriverScreen_CHATTING",
    icon: require('../../assets/icons/chat1.png'),
    path: 'ChatWithDriver',
  },
];
export const AddNewCardList=[
  {
    label: "Enter Your Card Details",

    placeholder: "Enter Your Card Details",
    name: 'Card_Details',
    type: 'default',
  
  },

  {
    label: 'Card Holder Name',

    placeholder: 'Card Holder Name',
    name: 'Card_Holder_Name',
    type: 'default',

  },
   
];
export const AddNewCardList_spilt=[
  {
    label: "Expiry (MM / YY)",

    placeholder: "Expiry (MM / YY)",
    name: 'Card_expire',
    type: 'number-pad',
  
  },

  {
    label: 'CVV',

    placeholder: 'CVV',
    name: 'Card_CVV',
    type: 'number-pad',

  },
]

export const StatusList = {
  "ARRIVED":{
    name:"ARRIVED",
    default:"provider(rider) has arrived"
  },
  "DROPPED":{
    name:"ARRIVED",
    default:"provider(rider) has reached destination"
  },
  "COMPLETED":{
    name:"COMPLETED",
    default:"provider(rider) has reached destination"
  },
  
}