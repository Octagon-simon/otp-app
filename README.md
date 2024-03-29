### React-OTP Component

This is a highly customizable React JS component that you use within your project to enable OTP Code submissions.

[View the live demo here](https://otp-app-n4sh.onrender.com/)

## INSTALLATION STEPS

> Please note that this component does not make use of any external library and this means that you can literally copy these files `otpInputs.js` && `otpInputs.module.css` into your project and you're good to go

After cloning the repo or downloading the source code, run `npm install` to install all dependencies.

```bash
$ npm install
```

When the dependencies are installed, and you encounter a babel error, run the command below to resolve this error

```bash
$ npm install --save-dev @babel/plugin-proposal-private-property-in-object --legacy-peer-deps
```

Now Fire up your server 🔥

```bash
$ npm run start
```

Visit the server at `http://localhost:3000` to view the app

## CONFIGURATION

- From `v1.1`, `autoSubmit` is configurable when you call the component `<OTPInputGroup autoSubmit={false} />`. 
  - If you set this prop to `true`, the form will call the submit function once all boxes has been filled, otherwise, you need to hit the submit button for the form to be submitted.

- This simple app supports both Numbers and Letters. 
  - If you need only numbers or letters, be sure to modify it to suit your project.


## Read the article here

[On Medium](https://simon-ugorji.medium.com/how-to-create-an-otp-input-box-in-react-js-next-js-3acc6adf5d6b)
 
## PREVIEW

![otpInput-ezgif com-speed-1](https://github.com/KaboCash/react-otp-input/assets/68190998/93ee6ca8-ca87-4501-a13a-eb9f118816ae)

Not playing? [click here to view it](https://github.com/KaboCash/react-otp-input/assets/68190998/93ee6ca8-ca87-4501-a13a-eb9f118816ae)

## Watch the Preview

[On YouTube](https://youtu.be/R5SziarxAu4)
