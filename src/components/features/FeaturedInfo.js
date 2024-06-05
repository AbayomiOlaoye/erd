import React from 'react';
import styles from './FeaturedInfo.module.scss';
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const FeaturedInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.featuredItem}> 
        <div className={styles.featuredTitle}>Employee Id</div> 
        <div className={styles.featuredMoneyContainer}> 
          <div className={styles.featuredMoney}>xxxxxx</div> 
          <div className={styles.featuredMoneyRate}> 
            -11.4 <FaArrowDown className={`${styles.featuredIcon} ${styles.negative}`} /> 
          </div> 
        </div> 
      </div> 
      <div className={styles.featuredItem}> 
        <div className={styles.featuredTitle}>Employee Name</div> 
        <div className={styles.featuredMoneyContainer}> 
          <div className={styles.featuredMoney}>xxxxxx</div> 
          <div className={styles.featuredMoneyRate}> 
            -1.4 <FaArrowDown className={`${styles.featuredIcon} ${styles.negative}`} /> 
          </div> 
        </div>
      </div>
      <div className={styles.featuredItem}> 
        <div className={styles.featuredTitle}>Employee Department</div> 
        <div className={styles.featuredMoneyContainer}> 
          <div className={styles.featuredMoney}>xxxxxx</div> 
          <div className={styles.featuredMoneyRate}> 
            +2.4 <FaArrowUp className={`${styles.featuredIcon}`} /> 
          </div> 
        </div>
      </div>
    </div>
  )
}

export default FeaturedInfo;
