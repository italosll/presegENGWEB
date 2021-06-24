import Div100vh from 'react-div-100vh';
import CustomButton from '../atoms/CustomButton';
import InputWithError from '../atoms/InputWithError';

export default function LoginTemplate() {
  return (
    <Div100vh className="bg-gray-400">
      <div
        className="w-100 h-full"
        style={{
          background: 'url(/static/images/background_login.jpeg',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',

        }}
      >
        <div>

          <div>
            <span className="sm:text-5xl lg:text-7xl text-white font-bold">`Bem vindo :)`</span>
          </div>
          <div>

            <div className="
            bg-white
            w-72
            max-w-full
            h-full
            "
            >
              <span className="text-blue-500 text-5xl font-bold">Preseg</span>
              <InputWithError props="mt-12" />
              <InputWithError />
              <CustomButton />
            </div>

          </div>

        </div>
      </div>
    </Div100vh>

  );
}
