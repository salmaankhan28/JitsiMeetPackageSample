package com.jitsimeetpackagesample;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;

import org.jitsi.meet.sdk.JitsiMeet;
import org.jitsi.meet.sdk.JitsiMeetActivity;
import org.jitsi.meet.sdk.JitsiMeetConferenceOptions;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.logging.Level;

public class ExampleActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_example);

        // Initialize default options for Jitsi Meet conferences.
        URL serverURL;
        try {
            serverURL = new URL("https://meet.jit.si");
        } catch (MalformedURLException e) {
            e.printStackTrace();
            throw new RuntimeException("Invalid server URL!");
        }
        Log.d("JITSI CLIENT", "JITSI CLIENT: URL WORKED");

        JitsiMeetConferenceOptions defaultOptions
                = new JitsiMeetConferenceOptions.Builder()

                // When using JaaS, set the obtained JWT here
                //.setToken("MyJWT")
                // Different features flags can be set
                //.setFeatureFlag("toolbox.enabled", false)
                //.setFeatureFlag("filmstrip.enabled", false)
                
                // .setAudioMuted(false)
                // .setVideoMuted(false)
                // .setAudioOnly(false)
                .setWelcomePageEnabled(true)
                .setServerURL(serverURL)
                .setFeatureFlag("call-integration.enabled", false)
                .setFeatureFlag("resolution", 360)
                .build();
        JitsiMeet.setDefaultConferenceOptions(defaultOptions);
        Log.d("JITSI CLIENT", "JITSI CLIENT: GOT TO END OF ON CREATE");
    }

    public void onButtonClick(View v) {
        try {
        Log.d("JITSI CLIENT", "JITSI CLIENT: BUTTON CLICKED");
           EditText editText = findViewById(R.id.conferenceName);
        String text = editText.getText().toString();

        Log.d("JITSI CLIENT", "JITSI CLIENT: TEXT FOUND " + text);

        if (text.length() > 0) {
            // Build options object for joining the conference. The SDK will merge the default
            // one we set earlier and this one when joining.
            JitsiMeetConferenceOptions options
                    = new JitsiMeetConferenceOptions.Builder()
                // When using JaaS, set the obtained JWT here
                // .setToken("eyJraWQiOiJ2cGFhcy1tYWdpYy1jb29raWUtOTNkZjlmNjAwMTE4NDIyMmI4YWFkMGY4ZGM2ODg2MjcvMDBiOWM4LVNBTVBMRV9BUFAiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJqaXRzaSIsImV4cCI6MTYyODAwMjY0MSwibmJmIjoxNjI3OTk1NDM2LCJpc3MiOiJjaGF0Iiwicm9vbSI6IioiLCJzdWIiOiJ2cGFhcy1tYWdpYy1jb29raWUtOTNkZjlmNjAwMTE4NDIyMmI4YWFkMGY4ZGM2ODg2MjciLCJjb250ZXh0Ijp7ImZlYXR1cmVzIjp7ImxpdmVzdHJlYW1pbmciOmZhbHNlLCJvdXRib3VuZC1jYWxsIjpmYWxzZSwic2lwLW91dGJvdW5kLWNhbGwiOmZhbHNlLCJ0cmFuc2NyaXB0aW9uIjpmYWxzZSwicmVjb3JkaW5nIjpmYWxzZX0sInVzZXIiOnsibW9kZXJhdG9yIjp0cnVlLCJuYW1lIjoiVGVzdCBVc2VyIiwiaWQiOiJhdXRoMHw1ZmIyNDdhZGQ2ZmNiMzAwNzE3NDFkOTciLCJhdmF0YXIiOiIiLCJlbWFpbCI6InRlc3QudXNlckBjb21wYW55LmNvbSJ9fX0.rvua4B7NJEMqIiTPAnTxJqC59hfiSyUpD6FLJRM8tGW55myxwYb044Bw9l5tuH3CybyE8bL4He8a9NFJ4E4W84Ev-YEIwjg3Fsd5nEbbsDep1a3yRtuI527mPzsBV54dd2hawYc8JXE3BV7tegJz5hl8_3qxxWRq98K-hAPzfmRRHaws_cVPVIi1nCB6G8gyNdSPLM9YoPZOoDHBYLm9ELiu5jJBWbT1ulnZO6sIQ5LmHEa9pb7OfHN-PzDmZIJ1-wagjypBqjY7GQJAEzhBOYJlt_vg2MfinGvuT2kiUOE-01SXfn4_k2inj2ABGIg-Wr4O_VyWxtwztjXgFLlvNQ")
                // .setRoom("vpaas-magic-cookie-93df9f6001184222b8aad0f8dc688627/test")
                .setRoom(text)
                    .build();
            // Launch the new activity with the given options. The launch() method takes care
            // of creating the required Intent and passing the options.
            Log.d("JITSI CLIENT", "JITSI CLIENT: STARTING ACTIVITY");
            JitsiMeetActivity.launch(this, text);
        }
        } catch (RuntimeException e) {
            e.printStackTrace();
            Log.d("JITSI CLIENT", "JITSI CLIENT: ACTIVITY CONNECTION FAILED");
            throw new RuntimeException("Connection Failed");
        }
      
    }
}