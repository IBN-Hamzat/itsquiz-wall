import React, { Component, PropTypes } from 'react';

import Dialog    from './Dialog.jsx';
import Button    from 'react-mdl/lib/Button';
import Icon      from './Icon.jsx';

import { facebookAppId } from '../config';

if ( process.env.BROWSER ) {
    require('./LoginDialog.less');
}

export default class LoginDialog extends Component {

    static contextTypes = { i18n: PropTypes.object };

    static propTypes = {
        isOpen         : PropTypes.bool.isRequired,
        onSocialLogin  : PropTypes.func.isRequired,
        onEmailLogin   : PropTypes.func.isRequired,
        onRequestClose : PropTypes.func.isRequired
    };

    render() {
        const { l } = this.context.i18n;
        const { title, onSocialLogin, onEmailLogin } = this.props;

        return (
            <div className='LoginDialog'>
                <Dialog
                    className = 'LoginDialog__dialog'
                    title     = {title}
                    {...this.props}>
                    <h4 className='LoginDialog__title'>
                        {l('Sign in with your social network account to continue')}
                    </h4>

                    <div className='LoginDialog__buttons-container'>
                        <div
                            className='LoginDialog__button LoginDialog__button--facebook'
                            onClick={onSocialLogin.bind(null, 'facebook')}>
                            <Icon type='facebook' className='LoginDialog__icon'/>
                        </div>

                        <div
                            className='LoginDialog__button LoginDialog__button--google'
                            onClick={onSocialLogin.bind(null, 'google')}>
                            <Icon type='google-plus' className='LoginDialog__icon'/>
                        </div>

                        <div
                            className='LoginDialog__button LoginDialog__button--vkontakte'
                            onClick={onSocialLogin.bind(null, 'vkontakte')}>
                            <Icon type='vk' className='LoginDialog__icon'/>
                        </div>

                        <div
                            className='LoginDialog__button LoginDialog__button--linkedin'
                            onClick={onSocialLogin.bind(null, 'linkedin')}>
                            <Icon type='linkedin' className='LoginDialog__icon'/>
                        </div>

                        <div
                            className='LoginDialog__button LoginDialog__button--github'
                            onClick={onSocialLogin.bind(null, 'github')}>
                            <Icon type='github-circle' className='LoginDialog__icon'/>
                        </div>
                    </div>

                    <h4 className='LoginDialog__title LoginDialog__title--clickable' onClick={onEmailLogin}>
                        {l('or use your e-mail')}
                    </h4>
                </Dialog>
            </div>
        );
    }
}
