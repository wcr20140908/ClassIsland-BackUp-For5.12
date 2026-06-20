(async () => {
  if (123 == 123) {
    for (var count = 0; count < 10; count++) {
      await callAction(
        'classisland.showNotification',
        (() => {
          let a = {};
          a.Mask = '好';
          a.MaskDurationSeconds = 3;
          a.Content = '';
          a.ContentDurationSeconds = 0;
          a.IsMaskSpeechEnabled = true;
          a.IsContentSpeechEnabled = false;
          a.IsWaitForCompleteEnabled = false;
          a.IsAdvancedSettingsEnabled = false;
          a.IsTopmostEnabled = false;
          a.IsEffectEnabled = false;
          a.IsSoundEffectEnabled = false;
          a.CustomSoundEffectPath = '';
          return a;
        })(),
      );
    }
  }
})();
