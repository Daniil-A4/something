import { useLocation } from "react-router-dom";
import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";


import { LoginComponent } from "../../components/loginComponent/LoginComponent";
import './secondPage.css';

export const SecondPage = () => {
  const location = useLocation();
  const resultData = location.state.resultData;

  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate("/");
  };

  return (
    <>
      <a
        href='https://core.telegram.org/widgets/login'
        target='_blank'
        rel="noreferrer"
      >
        <i
          className="pi pi-question"
          style={{ fontSize: '0.8rem', color: 'white', position: 'absolute', top: '1.1rem', right: '1.1rem', cursor: 'pointer', background: '#dddada', borderRadius: '50%', padding: '0.2rem', zIndex: '1' }}
        >
        </i>
      </a>

      <LoginComponent />

      <div className="flex align-items-center justify-content-end gap-3 m-auto"
        style={{ width: '270px' }}
      >
        <p className="inline-block">
          {resultData.value}
        </p>
        <Button
          label="изменить"
          className='p-0 border-noround border-none uppercase text-xxs dvdv-custom-btn-change'
          rounded
          onClick={handleBtnClick}
          link
        />
      </div>

      <Divider className="m-auto dvdv-line-custom-width" />

      <p className='mt-2 text-gray-500 text-center m-auto'
        style={{ maxWidth: '240px', fontSize: '14px'}}
      >
      Сообщение отправлено в Telegram.
      Пожалуйста, подтвердите доступ...
    </p >

      <div className="flex justify-content-center align-items-center mt-5">
        <Button
          label="Отмена"
          className='w-7rem border-none uppercase text-sm dvdv-btn-cancel-custom-color'
          rounded
          type='button'
          onClick={handleBtnClick}
        />
      </div>
    </>
  );
};