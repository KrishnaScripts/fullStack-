import './LandingPage.css';
import defaultAvatar from '../images/pngtree-man-avatar-image-for-profile-png-image_13001882.png';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { IUser } from '../types/user.type';
import { updateUser } from '../services/auth.service';

const LandingPage = () => {
  const userDatabackend = localStorage.getItem('userData');  
  const userDatamatch = userDatabackend ? JSON.parse(userDatabackend) : null;

  const initialValues: IUser = {
    firstName: userDatamatch.firstName || '',
    lastName: userDatamatch.lastName || '',
    email: userDatamatch.email || '',
    password: '', 
    phoneNumber: userDatamatch.phoneNumber || '',
    role: userDatamatch.role || '',
    confirmPassword: '' 
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phoneNumber: Yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
    password: Yup.string().min(6, 'Must be at least 6 characters'), // No required here if not changing
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
  });

  const handleFileUpload = () => {
    // Handle file upload logic here
  };

  const handleUpdate = async (formValue: IUser) => {
    console.log("Updating user with values:", formValue);
    const { firstName, lastName, email, phoneNumber } = formValue;

    try {
      await updateUser(firstName, lastName, email, phoneNumber).then(
        (response)=>{

          const data = response.data.user;
          const userData = localStorage.getItem('userData');
          if (userData) {
            const userObject = JSON.parse(userData);
            userObject.firstName = data.firstName;
            userObject.lastName = data.lastName;
            userObject.email = data.email;
            userObject.phoneNumber = data.phoneNumber;
            localStorage.setItem('userData', JSON.stringify(userObject));
            alert("Data Update Sucessfully!");
          }else{
            console.error('No user data found in localStorage.');
          }
        }
      )
    } catch (err: any) {
      console.error("Error updating user:", err);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-content">
        <h2 className="profile-heading">My Profile</h2>
        <div className="card-container">
          <div className="profile-card">
            <img src={defaultAvatar} alt="Profile" className="avatar" />
            <span
              className="edit-photo-link"
              onClick={() => document.getElementById('fileInput')?.click()}
              style={{ cursor: 'pointer', color: 'blue' }}
            >
              Edit Photo
            </span>
            <input 
              type="file" 
              id="fileInput" 
              accept="image/*" 
              onChange={handleFileUpload} 
              style={{ display: 'none' }} 
            />
            <div className="profile-details">
              <p>{userDatamatch.firstName || 'First Name'}</p>
              <p>{userDatamatch.lastName || 'Last Name'}</p>
              <p>{userDatamatch.department || 'IT'}</p>
            </div>
          </div>
          <div className="profile-card">
            <h3>My Details</h3>
            <Formik 
              initialValues={initialValues} 
              validationSchema={validationSchema} 
              onSubmit={handleUpdate} 
            >
              <Form>
                <div className="formProfile-container">
                  <div className="form-field">
                    <label htmlFor="firstName">First Name</label>
                    <Field type="text" id="firstName" name="firstName" className="form-control" />
                    <ErrorMessage name="firstName" component="div" className="text-danger txt-error" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="lastName">Last Name</label>
                    <Field type="text" id="lastName" name="lastName" className="form-control" />
                    <ErrorMessage name="lastName" component="div" className="text-danger txt-error" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <Field type="text" id="phoneNumber" name="phoneNumber" className="form-control" />
                    <ErrorMessage name="phoneNumber" component="div" className="text-danger txt-error" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <Field type="email" id="email" name="email" className="form-control" />
                    <ErrorMessage name="email" component="div" className="text-danger txt-error" />
                  </div>
                </div>
                <button type="submit" className="button">Update</button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
