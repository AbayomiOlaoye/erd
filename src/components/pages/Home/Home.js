import React from 'react';
// import FeaturedInfo from '../../features/FeaturedInfo';
import Widget from '../../features/Widget';
import { userData } from '../../features/dummyData';
import Chart from '../../features/Chart';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <section className={styles.homeContainer}>
      <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
      <div className={styles.homeWidgets}>
        <Widget />
      </div>
    </section>
  );
};

export default Home;
