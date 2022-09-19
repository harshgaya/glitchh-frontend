import React from 'react';
import classes from './Privacy_Security.module.css';

function Privacy_Security() {
    return (
        <div className={classes.Privacy_Security}>

            <div className={classes.Privacy_Security_Text}>Privacy Security Settings</div>
            <div className={classes.Account_Settings}>

                <div className={classes.Account_Settings_Text}>Account Settings</div>
                <div className={classes.Account_Settings_OtherText}>

                    <div className={classes.Account_Settings_OtherText_Private_Account}>
                        <input className={classes.tick_box} type="checkbox" id="account" name="account" value="account" />

                        <div className={classes.Account_Settings_OtherText_Private_Account_Text}>Private Account
                        </div>

                    </div>
                    <div className={classes.Account_Settings_OtherText_Long_Text}>Only those you allow can view your posts and bytes on Glitchh while your account is private. Your current followers won't be impacted.</div>
                    <div className={classes.Account_Settings_OtherText_Change_Account}>Change your account to creator mode</div>
                </div>

            </div>
            <div className={classes.Account_Settings}>

                <div className={classes.Account_Settings_Text}>Activity Status</div>
                <div className={classes.Account_Settings_OtherText}>

                    <div className={classes.Account_Settings_OtherText_Private_Account}>
                        <input className={classes.tick_box} type="checkbox" id="status" name="status" value="status" />
                        <div className={classes.Account_Settings_OtherText_Private_Account_Text}>Show activity status</div>

                    </div>
                    <div className={classes.Account_Settings_OtherText_Long_Text}>Permit your followers and anyone you message on Instagram applications to see when you last used them or are actively using them. You won't be able to view the activity status of other accounts while this is disabled.</div>

                </div>

            </div>
            <div className={classes.Account_Settings}>

                <div className={classes.Account_Settings_Text}>Two-factor Authentication</div>
                <div className={classes.Account_Settings_OtherText}>
                    <div className={classes.Account_Settings_OtherText_Long_Text}>We'll ask for a security code when we need to confirm that it's you logging in.</div>

                </div>

            </div>
            <div className={classes.Account_Settings}>

                <div className={classes.Account_Settings_Text}>Text Messaging</div>
                <div className={classes.Account_Settings_OtherText}>

                    <div className={classes.Account_Settings_OtherText_Private_Account}>
                        <input className={classes.tick_box} type="checkbox" id="status" name="status" value="status" />
                        <div className={classes.Account_Settings_OtherText_Private_Account_Text}>Use text messaging</div>

                    </div>
                    <div className={classes.Account_Settings_OtherText_Long_Text}>We'll send a code to your phone number ending in 7263.</div>

                </div>

            </div>


        </div>
    )
}

export default Privacy_Security