import { extend } from 'flarum/extend';
import app from 'flarum/app';
import SignatureSettings from './components/View/SignatureSettings';
import LinkButton from 'flarum/components/LinkButton';
import UserPage from 'flarum/components/UserPage';
import CommentPost from 'flarum/components/CommentPost';

app.initializers.add('signature', () => {
    app.routes['settings.signature'] = { path: '/settings/signature', component: SignatureSettings };

    extend(UserPage.prototype, 'navItems', function (items) {
      if(app.session.user) {
        if (this.user.id() === app.session.user.id() || app.session.user.id() == 1) {
          items.add(
            'signature',
            <LinkButton href={app.route('settings.signature')} icon="fas fa-signature"
                        class="Button Button--link hasIcon">
              {app.translator.trans('signature.forum.buttons.signature')}
            </LinkButton>,
            -100
          );
        }
      }
      
    });

    extend(CommentPost.prototype, 'view', function (vnode) {
        if (this.attrs.post.user()) {
            const Signature = this.attrs.post.user().data.attributes.signature;

            if (Signature) {
                vnode.children.push(m('div.SignatureWrapper', {}, m.trust(Signature)));
            }
        }
    });
});
