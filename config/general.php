<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

use craft\config\GeneralConfig;
use craft\helpers\App;

return GeneralConfig::create()
    ->activateAccountSuccessPath('account/dashboard')
    ->aliases([
        '@web' => rtrim(APP::env('PRIMARY_SITE_URL'), '/'),
        '@webroot' => dirname(__DIR__) . '/web',
    ])
    ->allowUpdates(App::env('CRAFT_ALLOW_UPDATES') ?? false)
    ->allowAdminChanges(App::env('CRAFT_ALLOW_ADMIN_CHANGES') ?? false)
    ->autoLoginAfterAccountActivation(1)
    ->brokenImagePath('@webroot/dist/images/fallback.png')
    ->cpTrigger('cpanel')
    ->defaultImageQuality(100)
    ->defaultWeekStartDay(1)
    ->devMode(App::env('CRAFT_DEV_MODE') ?? false)
    ->disallowRobots(App::env('CRAFT_DISALLOW_ROBOTS') ?? false)
    ->enableGql(0)
    ->enableTemplateCaching(0)
    ->errorTemplatePrefix('_exceptions/')
    ->generateTransformsBeforePageLoad(1)
    ->isSystemLive(App::env('CRAFT_SYSTEM_LIVE') ?? true)
    ->maxUploadFileSize('25M')
    ->omitScriptNameInUrls(1)
    ->partialTemplatesPath('_blocks')
    ->phpSessionName('CRAFT')
    ->preloadSingles(1)
    ->preventUserEnumeration(1)
    ->securityKey(App::env('CRAFT_SECURITY_KEY'))
    ->sendPoweredByHeader(0)
    ->timezone(App::env('TIMEZONE') ?? 'Asia/Hong_Kong')
    ->transformGifs(0)
    ->useEmailAsUsername(1)
;