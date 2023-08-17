import styles from './ContactForm.module.css'
import Button from '../Buttons/Button'
import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

import { useState } from 'react'

const ContactForm = () => {



  let [name, setName] = useState("Aadil")
  let [email, setEmail] = useState("adil@gmail.co")
  let [text, setText] = useState("hello")

  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value)
    setEmail(event.target[1].value)
    setText(event.target[2].value)

  }

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            isOutline={false}
            text="VIA CALL CENTER"
            icon={<MdMessage fontSize="20px" />}
          />
          <Button
            isOutline={false}
            text="VIA CALL"
            icon={<FaPhoneAlt fontSize="20px" />}
          />
        </div>

        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="20px" />}
        />

        <form action="" onSubmit={onSubmit}>
          <div className={styles.main_form}>
            <div className={styles.form_container}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>
            <div className={styles.form_container}>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" />
            </div>

            <div className={styles.form_container}>
              <label htmlFor="text-area">Text Area</label>
              <textarea name="text-area" id="" cols="20" rows="3"></textarea>
            </div>
            <div className={styles.submit_button}>
              <Button
                isOutline={false}
                text="SUBMIT BUTTON"
              />
            </div>
            <p>
              {
                name + " " + email + " " + text
              }
            </p>
          </div>
        </form>
      </div>
      <div>
        <img src="/images/service.svg" alt="service iamge" />
      </div>
    </section>
  )
}

export default ContactForm
