<?php

namespace App\Listeners;

use App\Events\SendChatMessageNotification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendChatNotification
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  \App\Events\SendChatMessageNotification  $event
     * @return void
     */
    public function handle(SendChatMessageNotification $event)
    {
        //
    }
}
