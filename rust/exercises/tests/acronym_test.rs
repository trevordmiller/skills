#[test]
fn empty() {
    assert_eq!(exercises::acronym::abbreviate(""), "");
}

#[test]
fn basic() {
    assert_eq!(
        exercises::acronym::abbreviate("Portable Network Graphics"),
        "PNG"
    );
}

#[test]
fn lowercase_words() {
    assert_eq!(exercises::acronym::abbreviate("Ruby on Rails"), "ROR");
}

#[test]
fn punctuation() {
    assert_eq!(
        exercises::acronym::abbreviate("First In, First Out"),
        "FIFO"
    );
}

#[test]
fn all_caps_word() {
    assert_eq!(
        exercises::acronym::abbreviate("GNU Image Manipulation Program"),
        "GIMP"
    );
}

#[test]
fn all_caps_word_with_punctuation() {
    assert_eq!(
        exercises::acronym::abbreviate("PHP: Hypertext Preprocessor"),
        "PHP"
    );
}

#[test]
fn punctuation_without_whitespace() {
    assert_eq!(
        exercises::acronym::abbreviate("Complementary metal-oxide semiconductor"),
        "CMOS"
    );
}

#[test]
fn very_long_abbreviation() {
    assert_eq!(
        exercises::acronym::abbreviate(
            "Rolling On The Floor Laughing So Hard That My Dogs Came Over And Licked Me"
        ),
        "ROTFLSHTMDCOALM"
    );
}

#[test]
fn consecutive_delimiters() {
    assert_eq!(
        exercises::acronym::abbreviate("Something - I made up from thin air"),
        "SIMUFTA"
    );
}

#[test]
fn apostrophes() {
    assert_eq!(exercises::acronym::abbreviate("Halley's Comet"), "HC");
}

#[test]
fn underscore_emphasis() {
    assert_eq!(
        exercises::acronym::abbreviate("The Road _Not_ Taken"),
        "TRNT"
    );
}
