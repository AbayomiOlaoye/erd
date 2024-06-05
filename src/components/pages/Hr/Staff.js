import React from 'react';
import { FaRegUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import {
  MdLocationSearching,
  MdOutlineAttachEmail,
  MdOutlinePhonelinkLock,
} from "react-icons/md";
import "../css/Staff.scss";

const Staff = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h3 className="userTitle">Update Employee Details</h3>
        <div className="userUpdateRight">
          <button className="userUpdateButton">Update</button>
        </div>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna Becker</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <FaRegUser className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99</span>
            </div>
            <div className="userShowInfo">
              <SlCalender className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <MdOutlinePhonelinkLock className="userShowIcon" />
              <span className="userShowInfoTitle">+234 23 456 67</span>
            </div>
            <div className="userShowInfo">
              <MdOutlineAttachEmail className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <MdLocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">New York | USA</span>
            </div>
            <span className="userShowTitle">Next-of-Kin Details</span>
            <div className="userShowInfo">
              <MdOutlineAttachEmail className="userShowIcon" />
              <span className="userShowInfoTitle">Ima Culeta</span>
            </div>
            <div className="userShowInfo">
              <MdOutlineAttachEmail className="userShowIcon" />
              <span className="userShowInfoTitle">23456768756</span>
            </div>
            <span className="userShowTitle">Bank Details</span>
            <div className="userShowInfo">
              <MdOutlineAttachEmail className="userShowIcon" />
              <span className="userShowInfoTitle">First Bank</span>
            </div>
            <div className="userShowInfo">
              <MdOutlineAttachEmail className="userShowIcon" />
              <span className="userShowInfoTitle">23456768756</span>
            </div>
            <span className="userShowTitle">Job Details</span>
            <div className="userShowInfo">
              <MdOutlineAttachEmail className="userShowIcon" />
              <span className="userShowInfoTitle">Rice Production</span>
            </div>
            <div className="userShowInfo">
              <MdOutlineAttachEmail className="userShowIcon" />
              <span className="userShowInfoTitle">#15,000</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="annabeck99@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 123 456 67"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="userUpdateInput"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Staff;
