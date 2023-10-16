while True:
    text = input()
    text_c = str.lower(text)
    text_backwards = text_c[::-1]

    if text_backwards == text_c:
        print("ano")
    else:
        print("nie")
