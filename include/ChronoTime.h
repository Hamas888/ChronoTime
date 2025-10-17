#ifndef CHRONOTIME_H
#define CHRONOTIME_H

#if defined(ARDUINO) 
  #include <Arduino.h>
    #if defined(ESP32)
        #include <time.h>
        #include <sys/time.h>
    #endif
#elif defined(__STM32__)
#elif defined(ESP_PLATFORM)
    #include <time.h>
    #include <sys/time.h>
    #elif defined(__ZEPHYR__)
#elif defined(__linux__) || defined(_WIN32) || defined(__APPLE__)
#endif

class ChronoTime {
    public:
        ChronoTime();
};


#endif // CHRONOTIME_H