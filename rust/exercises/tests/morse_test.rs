#[test]
fn sos() {
    assert_eq!(exercises::morse::convert_letters("sos"), "...---...");
}

#[test]
fn daily() {
    assert_eq!(
        exercises::morse::convert_letters("daily"),
        "-...-...-..-.--"
    );
}

#[test]
fn programmer() {
    assert_eq!(
        exercises::morse::convert_letters("programmer"),
        ".--..-.-----..-..-----..-."
    );
}

#[test]
fn bits() {
    assert_eq!(exercises::morse::convert_letters("bits"), "-.....-...");
}

#[test]
fn three() {
    assert_eq!(exercises::morse::convert_letters("three"), "-.....-...");
}
