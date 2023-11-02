import { Card } from 'primereact/card';
import './loginComponent.css';

export const LoginComponent = () => {
  return (
    <Card
      pt= {
        {root: 'dvdv-wrapper-card'}
      }
    >
      <div className="flex gap-6 align-items-center justify-content-center">
        <div className="icon-bg
        icon-telegram_icon-1
        icon-arrow_right_icon"
        >
        </div>

        <a
          href="https://t.me/SampleBot"
          target="_blank"
          rel="noreferrer"
          className=" text-white no-underline border-circle font-medium m-2 flex align-items-center justify-content-center text-2xl"
          style={{ backgroundColor: '#e57979', width: '50px', height: '50px' }}
        >
          S
        </a>
      </div>

      <p className="mb-3 text-center font-medium line-height-2">
        Войдите, чтобы использовать аккаунт Telegram<br /> для core.telegram.org и {' '}
        <a
          href="https://t.me/SampleBot"
          target="_blank"
          rel="noreferrer"
          className="no-underline hover:underline"
          style={{ color: '#1385d8' }}
        >
          SampleBot
        </a>
        .
      </p>

      <p className="m-0 text-center line-height-2"
        style={{ fontSize: '15px' }}
      >
        Введите свой <b className='font-medium'>номер телефона</b> в {' '}
        <a
          href="https://telegram.org/faq#login-and-sms"
          target="_blank"
          rel="noreferrer"
          className="no-underline hover:underline"
          style={{ color: '#1385d8' }}
        >
          международном формате
        </a>
        . Подтверждение будет отправлено в Telegram.
      </p>
    </Card >
  )
};