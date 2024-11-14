// app/auth/signup/page.tsx
'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../auth.module.css';
import { OCCUPATIONS, LOCATIONS } from '../constants';

export default function SignupPage() {
  // 상태 관리
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    passwordConfirm: '',
    age: '',
    occupation: '',
    occupationCategory: '',
    city: '',
    district: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    age: ''
  });

  const [districts, setDistricts] = useState<string[]>([]);

  // 애니메이션 변수
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // 도시 선택 시 구역 업데이트
  useEffect(() => {
    if (formData.city && LOCATIONS[formData.city as keyof typeof LOCATIONS]) {
      setDistricts(LOCATIONS[formData.city as keyof typeof LOCATIONS]);
    } else {
      setDistricts([]);
    }
  }, [formData.city]);

  // 입력값 변경 처리
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // 실시간 유효성 검사
    validateField(name, value);
  };

  // 유효성 검사
  const validateField = (name: string, value: string) => {
    const newErrors = { ...errors };

    switch (name) {
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        newErrors.email = !emailRegex.test(value) ? '유효한 이메일을 입력해주세요.' : '';
        break;
      case 'password':
        newErrors.password = value.length < 8 ? '비밀번호는 8자 이상이어야 합니다.' : '';
        if (formData.passwordConfirm && value !== formData.passwordConfirm) {
          newErrors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
        }
        break;
      case 'passwordConfirm':
        newErrors.passwordConfirm = value !== formData.password ? '비밀번호가 일치하지 않습니다.' : '';
        break;
      case 'age':
        const age = parseInt(value);
        newErrors.age = (age < 1 || age > 149) ? '유효한 나이를 입력해주세요.' : '';
        break;
    }

    setErrors(newErrors);
  };

  // 폼 제출 처리
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 모든 필드의 유효성 검사
    if (Object.values(errors).some(error => error !== '')) {
      console.log('유효성 검사 실패');
      return;
    }

    try {
      // API 호출 로직 구현 예정
      console.log('회원가입 데이터:', formData);
    } catch (error) {
      console.error('회원가입 실패:', error);
    }
  };

  return (
    <motion.div 
      className={styles.container}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className={styles.loginBox} variants={itemVariants}>
        <h2 className={styles.title}>회원가입</h2>
        
        <form className={styles.form} onSubmit={handleSubmit}>
          {/* 기본 정보 입력 */}
          <motion.div className={styles.inputGroup} variants={itemVariants}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="이메일"
              className={styles.input}
            />
            {errors.email && <span className={styles.error}>{errors.email}</span>}
          </motion.div>

          <motion.div className={styles.inputGroup} variants={itemVariants}>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="아이디"
              className={styles.input}
            />
          </motion.div>

          <motion.div className={styles.inputGroup} variants={itemVariants}>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="비밀번호"
              className={styles.input}
            />
            {errors.password && <span className={styles.error}>{errors.password}</span>}
          </motion.div>

          <motion.div className={styles.inputGroup} variants={itemVariants}>
            <input
              type="password"
              name="passwordConfirm"
              value={formData.passwordConfirm}
              onChange={handleChange}
              placeholder="비밀번호 확인"
              className={styles.input}
            />
            {errors.passwordConfirm && <span className={styles.error}>{errors.passwordConfirm}</span>}
          </motion.div>

          {/* 추가 정보 입력 */}
          <motion.div className={styles.inputGroup} variants={itemVariants}>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="나이"
              min="1"
              max="149"
              className={styles.input}
            />
            {errors.age && <span className={styles.error}>{errors.age}</span>}
          </motion.div>

          {/* 직종 선택 */}
          <motion.div className={styles.inputGroup} variants={itemVariants}>
            <select
              name="occupationCategory"
              value={formData.occupationCategory}
              onChange={handleChange}
              className={styles.select}
            >
              <option value="">직종 분류 선택</option>
              {OCCUPATIONS.map(cat => (
                <option key={cat.category} value={cat.category}>
                  {cat.category}
                </option>
              ))}
            </select>
          </motion.div>

          {formData.occupationCategory && (
            <motion.div className={styles.inputGroup} variants={itemVariants}>
              <select
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                className={styles.select}
              >
                <option value="">세부 직종 선택</option>
                {OCCUPATIONS.find(cat => cat.category === formData.occupationCategory)?.jobs.map(job => (
                  <option key={job} value={job}>{job}</option>
                ))}
              </select>
            </motion.div>
          )}

          {/* 지역 선택 */}
          <motion.div className={styles.inputGroup} variants={itemVariants}>
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={styles.select}
            >
              <option value="">시/도 선택</option>
              {Object.keys(LOCATIONS).map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </motion.div>

          {formData.city && (
            <motion.div className={styles.inputGroup} variants={itemVariants}>
              <select
                name="district"
                value={formData.district}
                onChange={handleChange}
                className={styles.select}
              >
                <option value="">시/군/구 선택</option>
                {districts.map(district => (
                  <option key={district} value={district}>{district}</option>
                ))}
              </select>
            </motion.div>
          )}

          {/* 제출 버튼 */}
          <motion.button 
            className={styles.loginButton}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
          >
            가입하기
          </motion.button>
        </form>

        {/* 로그인 페이지 링크 */}
        <motion.div 
          className={styles.signup}
          variants={itemVariants}
        >
          <p>이미 계정이 있으신가요?</p>
          <Link href="/auth">
            <motion.button 
              className={styles.signupButton}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              로그인하기
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}