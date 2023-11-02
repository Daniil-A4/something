import { useState } from 'react';
import { useFormik } from 'formik';

import { Dropdown } from 'primereact/dropdown';
import { InputMask } from 'primereact/inputmask';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import { classNames } from 'primereact/utils';


import { LoginComponent } from '../../components/loginComponent/LoginComponent';
import countries from "../../data/countries";
import './firstPage.css';

export const FirstPage = () => {
  const countriesDropDown = countries.map((country) => {
    return {
      name: country.name,
      code: country.code,
      dash: country.dash,
      mask: country.mask,
    };
  });

  const [selectedCountry, setSelectedCountry] = useState(
    countriesDropDown.find((country) => country.name === 'Россия')
  );

  console.log(selectedCountry);

  const itemTemplate = (option) => {
    return (
      <div className="flex align-items-center">
        <div>
          {option.name}
          <span
            className='ml-1 text-gray-500'
          >
            {option.code}
          </span>
        </div>
      </div>
    );
  }

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      value: '',
    },
    validate: (data) => {
      let errors = {};

      if (!data.value) {
        errors.value = 'Неккоректный номер';
      }

      return errors;
    },
    onSubmit: (data) => {
      if (data) {
        const resultData = {
          country: selectedCountry.name,
          value: `${selectedCountry.code} ${data.value}`,
        };

        formik.resetForm();
        navigate("/code", { state: { resultData } });
      }
    }
  });

  const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

  const getFormErrorMessage = (name) => {
    return isFormFieldInvalid(name) && (<small className="p-error absolute dvdv-absolute-custom">{formik.errors[name]}</small>);
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

      <form onSubmit={formik.handleSubmit} className='overflow-x-hidden'>
        <div className='flex flex-column align-items-center justify-content-center mt-3 m-auto'
          style={{ width: '270px' }}
        >
          <Dropdown
            options={countriesDropDown}
            value={selectedCountry}
            optionLabel="name"
            onChange={(e) => {
              setSelectedCountry(e.value);
              formik.setFieldValue('country', e.target.value);
            }}
            itemTemplate={itemTemplate}
            scrollHeight='150px'
            filter
            filterPlaceholder='Поиск'
            filterIcon='pi pi-chevron-down'
            emptyFilterMessage='Страна не найдена'
            className='border-noround border-none border-bottom-1'
            style={{ width: '270px', borderBottom: '1px solid #e0e0e0' }}
            pt={{
              input: { className: 'pl-0', style: { fontSize: '15px', color: 'black' } },
              item: { style: { fontSize: '14px', color: 'black', padding: '3px 10px' }, className: 'dvdv-items-in-list' },
              panel: { className: 'dvdv-dropdown-panel' },
              filterInput: { style: { border: 'none' }, className: 'dvdv-input-filter' },
              wrapper: { style: { maxWidth: '270px' } },
              filterIcon: { className: 'dvdv-filter-icon' },
            }}
          />

          <div className='p-inputgroup justify-content-center flex gap-3 mt-1 relative inputs-custom'>
            <div className='flex dvdv-input-wrapper w-3 relative'>
              <Dropdown
                value={selectedCountry.code}
                onChange={(e) => {
                  for (let i = 0; i < countriesDropDown.length; i++) {
                    if (e.value.length === 0) {

                    }

                    if (countriesDropDown[i].code === e.value) {
                      setSelectedCountry(countriesDropDown[i]);
                    }
                  }
                }}
                options={countriesDropDown}
                optionLabel="name"
                editable
                placeholder="Select a City"
                className={classNames({ 'p-invalid': isFormFieldInvalid('value'), 'ariaLabel': 'text-centet' }) + ' border-noround border-none border-bottom-1 pl-0 surface-0 w-3 flex text-center p-0 text-black-alpha-90'}
                panelClassName='dvdv-dropdown-panel-custom'
                maxLength={5}
                pt={{
                  input: { className: 'text-center p-0', style: { fontSize: '15px', color: 'black' } },
                  trigger: { style: { display: 'none' } },
                }}
              />
              <div className='dvdv-decor-focus'></div>
            </div>

            <div className='flex dvdv-input-wrapper w-full relative'>
              <InputMask
                mask={selectedCountry.mask}
                className={classNames({ 'p-invalid': isFormFieldInvalid('value') }) + ' border-noround border-none border-bottom-1 pl-0 surface-0 text-900 w-full'}

                placeholder={selectedCountry.dash}
                slotChar={selectedCountry.dash}
                value={formik.values.value}
                onChange={(e) => {
                  formik.setFieldValue('value', e.target.value);
                }}
                pt={{
                  root: {
                    className: 'dvdv-input-number',
                  }
                }}
              />
              <div className='dvdv-decor-focus'></div>
            </div>
            {getFormErrorMessage('value')}
          </div>
        </div>

        <div className='flex justify-content-center align-items-center gap-3 mt-3'>
          <Button
            label="Отмена"
            className='w-7rem mt-3 border-none uppercase text-sm dvdv-btn-cancel-custom-color'
            rounded
            type='button'
          />

          <Button
            label="Далее"
            className='w-7rem mt-3 border-none uppercase text-sm dvdv-btn-next-custom-color'
            rounded
            type='submit'
          />
        </div>
      </form >
    </>
  )
};