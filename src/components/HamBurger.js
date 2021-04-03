import React from 'react'

export default function HamBurger() {
    return (
        <div>
            <div class="flex items-center justify-between">
                <button class="p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current dark:text-coolGray-100">
                        <rect width="352" height="32" x="80" y="96"></rect>
                        <rect width="352" height="32" x="80" y="240"></rect>
                        <rect width="352" height="32" x="80" y="384"></rect>
                    </svg>
                </button>
            </div>
        </div>
    )
}
