// Modal.js
import React from 'react';
import Modal from 'react-modal';
import styles from './CustomModal.module.css'

Modal.setAppElement('#root');

const CustomModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      <p>السلام عليكم و رحمة الله و بركاته
        <br/>
        المشروع ده انا عاملته من علي الموبايل نظرا لاني ف الجيش و مكنش فيه اي وسيلة تانية عملت الي اققدر عليه ف المشروع. انا مش طالب اي تقييم علي المشروع ده و سبب اني عاملته اني كنت عاوز اتخرج مع زمايلي لاني بفضل الله مخلص كل التسليمات القديمة و الموضوع نفسيا هيفرق معايا و انا هكمله فيما بعد انشاء الله انا بصراحة مش عارف المشروع هيبقي شكله ايه ع الشاشة الكبيرة 
        و لكن هو معمول علي الشاشة الصغيرة 
        <br/>
        و شكرا.
      </p>
      <button className={styles.modalButton} onClick={closeModal}>Close</button>
    </Modal>
  );
}

export default CustomModal;