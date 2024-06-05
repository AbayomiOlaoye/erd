
/* eslint-disable import/extensions */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import { ImSpinner3 } from 'react-icons/im';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../../../assets/main_logo.svg';
// import { userLogin } from '../redux/reducer/authActions';
import styles from './Login.module.scss';

const Login = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      once: true,
      easing: 'ease-in',
    });
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  // const { loading, isAuthenticated } = useSelector((state) => state.auth);


  const navigate = useNavigate();

  // const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(false);
    setIsAuthenticated(true);
    // await dispatch(userLogin(formData));

    if (isAuthenticated) {
      navigate('/');
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.imgContainer}>
        <img
          src={logo}
          alt="login"
          className={styles.img}
        />
        <p className={styles.pretext}>...Thank you for service</p>
      </div>
      <div className={styles.formDiv}>
        <h4 className={styles.title}>Log into Your Account</h4>
        <form id="login" className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            placeholder="Email address"
            onChange={(e) => handleInputChange(e)}
            value={formData.emailOrUsername}
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            className={styles.input}
            placeholder="Password"
            onChange={(e) => handleInputChange(e)}
            value={formData.password}
            required
          />
          <button type="submit" className={styles.btn} disabled={loading}>
            { loading ? <ImSpinner3 className={styles.spinner} /> : 'Login' }
          </button>
        </form>
        {isAuthenticated && (
          <article className={styles.success}>
            <iframe
              src="https://lottie.host/embed/fc537770-7799-491f-9185-f5dd6eedcb72/qh65HuyBX2.json"
              title="Welcome"
              frameBorder="none"
            />
            <p>Login successful</p>
            <Link to="/dashboard">Continue to Dashboard</Link>
          </article>
        )}
      </div>
    </section>
  );
};

export default Login;
