import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";

import myImage from './01.png';
import './thirdPage.css';

export const ThirdPage = () => {
  const navigate = useNavigate();

  return (
    <div className='mt-4'>
      <Button
        label="выйти"
        className='p-0 border-noround border-none uppercase custom-btn-change font-medium'
        style={{ fontSize: '13px', position: 'absolute', top: '1.1rem', right: '1.1rem' }}
        rounded
        onClick={() => navigate('/')}
        link
      />

      <div className="flex gap-6 align-items-center justify-content-center">
        <div className="relative third-page icon-arrow_right_icon"
        >
          <img
            src={myImage}
            alt="person"
            className='dvdv-img-person'
          />
        </div>

        <a
          href="https://t.me/SampleBot"
          target="_blank"
          rel="noreferrer"
          className="dvdv-phone__icon-link-bot text-white no-underline border-circle font-medium m-2 flex align-items-center justify-content-center text-3xl"
        >
          S
        </a>
      </div>

      <p className='block text-center mt-3 font-medium'>
        core.telegram.org запришивает доступ через
        {' '}
        <a href='https://t.me/SampleBot' className='blue-text no-underline hover:underline'>SampleBot
        </a>
      </p>

      <p
        className='text-center line-height-3'
        style={{ fontSize: '15px' }}
      >
        Сайту будут известны Ваши <span className='font-medium'>имя, публичная ссылка и фотография</span>. Вы вошли как <span className='font-medium '>Имя Фамилия</span>.
      </p>

      <div
        className='flex justify-content-center align-items-center gap-3 mt-6'
        style={{ fontSize: '15px' }}
      >
        <Button
          label="отклонить"
          className='w-8rem mt-3 border-none uppercase text-sm btn-cancel-custom-color'
          rounded
          type='button'
        />

        <Button
          label="принять"
          className='w-8rem mt-3 border-none uppercase text-sm btn-next-custom-color'
          rounded
          type='button'
        />
      </div>

    </div>
  );
};