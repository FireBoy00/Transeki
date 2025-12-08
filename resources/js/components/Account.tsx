import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

type AccountProps = {
    onlyAvatar?: boolean;
    username?: string;
    avatarUrl?: string;
};

const getInitials = (username: string): string => {
    return username.includes(' ')
        ? username
              .split(' ')
              .filter(Boolean)
              .map((n, i) => (i < 2 ? n[0].toUpperCase() : ''))
              .join('')
        : username[0]?.toUpperCase() || '';
};

export default function Account({
    onlyAvatar = false,
    username = 'Guest',
    avatarUrl = '',
}: AccountProps) {
    const initials = getInitials(username);

    if (onlyAvatar) {
        return (
            <Avatar className="box-content h-8 w-8 cursor-pointer rounded-full p-1.5 hover:bg-gray-600">
                <AvatarImage src={avatarUrl} />
                <AvatarFallback className="bg-primary/45">
                    {initials}
                </AvatarFallback>
            </Avatar>
        );
    }

    return (
        <div className="flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-700 p-1.5 hover:bg-primary/45">
            <Avatar className="h-8 w-8">
                <AvatarImage src={avatarUrl} />
                <AvatarFallback className="bg-primary/45">
                    {initials}
                </AvatarFallback>
            </Avatar>
            <span>
                <span className="mr-1.5 font-medium text-white">
                    {username}
                </span>
            </span>
        </div>
    );
}
