import app from 'flarum/app';


app.initializers.add('signature', () => {
    app.extensionData.for('signature')
      .registerSetting({
        setting: 'signature.maximum_image_width',
        type: 'text',
        label: app.translator.trans('signature.admin.settings.maximum_image_width.description')
      })
      .registerSetting({
        setting: 'signature.maximum_image_height',
        type: 'text',
        label: app.translator.trans('signature.admin.settings.maximum_image_height.description')
      })
      .registerSetting({
        setting: 'signature.maximum_image_count',
        type: 'text',
        label: app.translator.trans('signature.admin.settings.maximum_image_count.description')
      })
      .registerSetting({
        setting: 'signature.maximum_char_limit',
        type: 'text',
        label: app.translator.trans('signature.admin.settings.maximum_char_limit.description')
      })
      
});
