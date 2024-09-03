import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import ChooseLangugae from '../screens/ChooseLanguage';
import Login from '../screens/Login';
import Register from '../screens/Register';
import OTP from '../screens/OTP';
import DrawerAnimation from './DrawerAnimation';
import ForgotPassword from '../screens/ForgotPassword';
import ForgotPin from '../screens/ForgotPin';
import SuccessScreen from '../screens/ForgotPassword/SuccessScreen';
import VerifyPin from '../screens/ForgotPassword/VerifyPin';
import { ChooseOffering, SubCategory,DetailedCategoryScreen,AddServiceScreen,ListOfServices } from '../screens/Category';
import EditSubCategory from '../screens/Category/Add/EditSubCategory';
import AllCategory from '../screens/Category/AllCategories';
import { ChangePassword } from '../screens/EditAccount/changepassword';
import { EditAccounts } from '../screens/EditAccount';
import Payment from '../screens/Cards/Payment';
import { ChangePin } from '../screens/EditAccount/changepin';
import AboutUs from '../screens/Support/AboutUs';
import TermsandCondition from '../screens/Support/TermsandCondition';
import { ContactUs } from '../screens/Support/ContactUs';
import ChooseServiceProvider from '../screens/Category/ChooseServiceProvider';
import { Summary } from '../screens/Summary/summary';
import SuccessBooking from '../screens/SuccessfulBooking/SuccessBooking';
import PaymentSuccess from '../screens/PaymentSuccess';
import FeedbackScreen from '../screens/Feedback';
import ServiceCompleted from '../screens/ServiceCompleted/servicecompleted';
import Debitcard from '../screens/Cards/Debitcard';
import VendorProfile from '../screens/VendorProfile';
import ServiceOfferingVendorCard from '../screens/Category/ServiceOfferingVendorCard';
import ParticularChat from '../screens/Chats';

const AuthNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="ChooseLanguage" component={ChooseLangugae} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Register} />
            <Stack.Screen name="Otp" component={OTP} />
            <Stack.Screen name="Home" component={DrawerAnimation} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
            {/* <Stack.Screen name="VerifyPin" component={VerifyPin} /> */}
            <Stack.Screen name="SubCategory" component={SubCategory} />
            <Stack.Screen name="ChooseServiceOffering" component={ChooseOffering} />
            <Stack.Screen name="EditSubCategory" component={EditSubCategory}/>
            <Stack.Screen name="AllCategory" component={AllCategory}/>
            <Stack.Screen name="DetailCategoryScreen" component={DetailedCategoryScreen}/>
            <Stack.Screen name="AddServiceScreen" component={AddServiceScreen}/>
            <Stack.Screen name="ChangePassword" component={ChangePassword}/>
            <Stack.Screen name="EditAccounts" component={EditAccounts}/>
            {/* <Stack.Screen name="ChangePin" component={ChangePin}/> */}
            <Stack.Screen name="Payment" component={Payment} />
            {/* <Stack.Screen name="ForgotPin" component={ForgotPin} /> */}
            <Stack.Screen name="ListOfServices" component={ListOfServices} />
            <Stack.Screen name="ContactUs" component={ContactUs} />
            <Stack.Screen name="AboutUs" component={AboutUs}/>
            <Stack.Screen name="Summary" component={Summary}/>
            <Stack.Screen name="TermsandCondition" component={TermsandCondition}/>
            <Stack.Screen name="ChooseServiceProvider" component={ChooseServiceProvider}/>
            <Stack.Screen name="SuccessBooking" component={SuccessBooking}/>
            <Stack.Screen name="PaymentSuccess" component={PaymentSuccess}/>
            <Stack.Screen name='FeedbackScreen' component={FeedbackScreen}/>
            <Stack.Screen name="ServiceCompleted" component={ServiceCompleted}/>
            <Stack.Screen name="Debitcard" component={Debitcard}/>
            <Stack.Screen name="VendorProfile" component={VendorProfile}/>
            <Stack.Screen name="ServiceOfferingVendorCard" component={ServiceOfferingVendorCard}/>
            <Stack.Screen name='ParticularChat' component={ParticularChat}/>

        </Stack.Navigator>
    )
}

export default AuthNavigator