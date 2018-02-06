

numbers = 10:-1:1;
freq = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for n = 1:100000
    lol = rand(2);
    d = det(lol);
    d = abs(9876543 * d);
    d = floor(d);
    for i = 10:-1:1
        x = mod(d, i);
        if x == 0
            freq(11 - i) = freq(11 - i) + 1;
            break
        end
    end
end

numbers;
freq;

plot(numbers, freq)

