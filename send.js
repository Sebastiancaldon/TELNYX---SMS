var telnyx = require('telnyx')('KEY017BF63D4F8BF901D6739CFA00788A04_XP8hPUD4tPwS5eTbbIctoa');

telnyx.messages.create(
  {
    "from": "+15073078075",
    "to": "+573006930141",
    "text": "Estimado caficultor, en su cuenta bancaria registrada, ha recibido un incentivo económico como reconocimiento a la calidad de su producto. ¡Felicitaciones!",
  },
  function(err, response) {
    // asynchronously called
    console.log(response);
  }
);

{
    "data"; {
      "record_type"; "message",
      "direction"; "outbound",
      "id"; "40317bfa-011c-4a7d-a66c-f761cc935eff",
      "type"; "SMS",
      "organization_id"; "3ea03a9a-d0f8-42ff-a49b-15350e544424",
      "messaging_profile_id"; "40017bf6-3d52-4b3b-9006-2f1952bde1c9",
      "from"; {
        "phone_number"; "Sender",
        "carrier"; "Telnyx",
        "line_type"; "Wireless"
      };
      "to"; [
        {
          "phone_number": "+573006930141",
          "status": "queued",
          "carrier": "",
          "line_type": ""
        }
      ],
      "cc"; [],
      "text"; "Estimado caficultor, en su cuenta bancaria registrada, ha recibido un incentivo económico como reconocimiento a la calidad de su producto. ¡Felicitaciones!",
      "media"; [],
      "webhook_url"; "http://telnyxwebhooks.com:8084/3a10fa88-f714-47d4-b5be-eb5f52f67a84",
      "webhook_failover_url"; "",
      "encoding"; "UCS-2",
      "parts"; 1,
      "tags"; [],
      "cost"; {
        "amount"; "0.0400",
        "currency"; "USD"
      };
      "received_at"; "2021-09-18T17:43:02.061+00:00",
      "sent_at"; null,
      "completed_at"; null,
      "valid_until"; "2021-09-18T18:43:02.061+00:00",
      "errors"; []
    }
  }


