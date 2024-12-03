// app/auth/page.tsx
"use client";

import { signIn } from "next-auth/react";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./auth.module.css";

export default function AuthPage() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={styles.container}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className={styles.loginBox} variants={itemVariants}>
        <h2 className={styles.title}>로그인</h2>

        <form className={styles.form}>
          <motion.div className={styles.inputGroup} variants={itemVariants}>
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="아이디를 입력해주세요"
              className={styles.input}
            />
          </motion.div>

          <motion.div className={styles.inputGroup} variants={itemVariants}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력해주세요"
              className={styles.input}
            />
          </motion.div>

          <motion.button
            className={styles.loginButton}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            로그인
          </motion.button>
        </form>

        <motion.div className={styles.socialLogin} variants={itemVariants}>
          <h3>소셜 로그인</h3>
          <div className={styles.socialButtons}>
            <button className={`${styles.socialButton} ${styles.kakao}`} onClick={() => signIn('kakao')}>
              <Image src="/kakao-icon.svg" alt="Kakao" width={24} height={24}  />
              카카오로 시작하기
            </button>
            <button className={`${styles.socialButton} ${styles.naver}`} onClick={() => signIn('naver')}>
              <Image src="/naver-icon.svg" alt="Naver" width={24} height={24}  />
              네이버로 시작하기
            </button>
            <button className={`${styles.socialButton} ${styles.github}`} onClick={() => signIn('github')}>
              <Image
                src="/github-icon.svg"
                alt="Github"
                width={24}
                height={24}
              />
              Github으로 시작하기
            </button>
            <button className={`${styles.socialButton} ${styles.github}`} onClick={() => signIn('google')}>
              <Image
                src="/google-icon.svg"
                alt="Github"
                width={24}
                height={24}
              />
              Google로 시작하기
            </button>
          </div>
        </motion.div>

        <motion.div className={styles.signup} variants={itemVariants}>
          <p>아직 회원이 아니시라구요?</p>
          <Link href="/auth/signup">
            <motion.button
              className={styles.signupButton}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              회원가입하기
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
