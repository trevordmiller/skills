#[test]
fn balanced() {
    assert_eq!(skills::balanced::is_balanced("xxxyyy"), true);
}

#[test]
fn imbalanced() {
    assert_eq!(skills::balanced::is_balanced("xxxyyyy"), false);
}

#[test]
fn balanced_long() {
    assert_eq!(skills::balanced::is_balanced("yyxyxxyxxyyyyxxxyxyx"), true);
}

#[test]
fn imbalanced_long() {
    assert_eq!(skills::balanced::is_balanced("xyxxxxyyyxyxxyxxyy"), false);
}

#[test]
fn empty() {
    assert_eq!(skills::balanced::is_balanced(""), true);
}

#[test]
fn single() {
    assert_eq!(skills::balanced::is_balanced("x"), false);
}
