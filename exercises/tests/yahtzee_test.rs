#[test]
fn maximum_score_a() {
    assert_eq!(
        skills::yahtzee::calculate_maxium_score(vec![2, 3, 5, 5, 6]),
        10
    );
}

#[test]
fn maximum_score_b() {
    assert_eq!(
        skills::yahtzee::calculate_maxium_score(vec![1, 1, 1, 1, 3]),
        4
    );
}

#[test]
fn maximum_score_c() {
    assert_eq!(
        skills::yahtzee::calculate_maxium_score(vec![1, 1, 1, 3, 3]),
        6
    );
}

#[test]
fn maximum_score_d() {
    assert_eq!(
        skills::yahtzee::calculate_maxium_score(vec![1, 2, 3, 4, 5]),
        5
    );
}

#[test]
fn maximum_score_e() {
    assert_eq!(
        skills::yahtzee::calculate_maxium_score(vec![6, 6, 6, 6, 6]),
        30
    );
}
