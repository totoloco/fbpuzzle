<?php

Atomik::set(array (
  'app' => array (
    'layout' => '_layout',
    'default_action' => 'index',
    'views' => array (
      'file_extension' => '.phtml',
      'contexts' => array (
        'js' => array (
          'prefix' => 'js',
          'layout' => false,
          'content-type' => 'text/javascript',
        ),
      ),
    ),
  ),
  'atomik' => 
  array (
    'start_session' => true,
    'class_autoload' => true,
    'trigger' => 'action',
    'catch_errors' => true,
    'display_errors' => true,
    'debug' => true,
    'url_rewriting' => true,
  ),
  'styles' => 
  array (
    0 => 'assets/css/main.css',
  ),
  'plugins' => 
  array (
  ),
  'scripts' => 
  array (
    0 => 'assets/js/jquery.js',
    1 => 'data.js?r='.time(),
    2 => 'assets/js/main.js?r='.time(),
  ),
));
